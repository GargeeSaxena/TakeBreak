package com.takebreak.app

import android.Manifest
import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.takebreak.app.databinding.ActivityMainBinding
import java.util.Calendar

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var preferenceHelper: PreferenceHelper
    private lateinit var notificationHelper: NotificationHelper
    private val handler = Handler(Looper.getMainLooper())
    private var updateRunnable: Runnable? = null

    companion object {
        private const val NOTIFICATION_PERMISSION_CODE = 100
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        preferenceHelper = PreferenceHelper(this)
        notificationHelper = NotificationHelper(this)

        setupSpinner()
        setupButtons()
        checkPermissions()
        updateUI()
    }

    private fun setupSpinner() {
        val intervals = arrayOf("15 minutes", "20 minutes", "25 minutes", "30 minutes", "45 minutes", "60 minutes")
        val intervalValues = arrayOf(15, 20, 25, 30, 45, 60)

        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, intervals)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        binding.intervalSpinner.adapter = adapter

        // Set saved interval
        val savedInterval = preferenceHelper.getInterval()
        val index = intervalValues.indexOf(savedInterval)
        if (index != -1) {
            binding.intervalSpinner.setSelection(index)
        } else {
            binding.intervalSpinner.setSelection(1) // Default: 20 minutes
        }

        binding.intervalSpinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                preferenceHelper.setInterval(intervalValues[position])
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }
    }

    private fun setupButtons() {
        binding.startButton.setOnClickListener {
            startTimer()
        }

        binding.stopButton.setOnClickListener {
            stopTimer()
        }
    }

    private fun checkPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(
                    this,
                    Manifest.permission.POST_NOTIFICATIONS
                ) != PackageManager.PERMISSION_GRANTED
            ) {
                ActivityCompat.requestPermissions(
                    this,
                    arrayOf(Manifest.permission.POST_NOTIFICATIONS),
                    NOTIFICATION_PERMISSION_CODE
                )
            }
        }
    }

    private fun startTimer() {
        val interval = preferenceHelper.getInterval()
        val alarmManager = getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val intent = Intent(this, AlarmReceiver::class.java)
        val pendingIntent = PendingIntent.getBroadcast(
            this,
            0,
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val triggerTime = System.currentTimeMillis() + (interval * 60 * 1000)
        
        // Set repeating alarm
        alarmManager.setRepeating(
            AlarmManager.RTC_WAKEUP,
            triggerTime,
            (interval * 60 * 1000).toLong(),
            pendingIntent
        )

        preferenceHelper.setTimerRunning(true)
        preferenceHelper.setNextBreakTime(triggerTime)

        updateUI()
        startUpdateTimer()
    }

    private fun stopTimer() {
        val alarmManager = getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val intent = Intent(this, AlarmReceiver::class.java)
        val pendingIntent = PendingIntent.getBroadcast(
            this,
            0,
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        alarmManager.cancel(pendingIntent)
        preferenceHelper.setTimerRunning(false)
        preferenceHelper.setNextBreakTime(0)

        stopUpdateTimer()
        updateUI()
    }

    private fun updateUI() {
        val isRunning = preferenceHelper.isTimerRunning()

        binding.startButton.isEnabled = !isRunning
        binding.stopButton.isEnabled = isRunning
        binding.intervalSpinner.isEnabled = !isRunning

        if (isRunning) {
            binding.statusText.text = getString(R.string.timer_running)
            updateNextBreakText()
        } else {
            binding.statusText.text = getString(R.string.timer_stopped)
            binding.nextBreakText.text = ""
        }
    }

    private fun updateNextBreakText() {
        val nextBreakTime = preferenceHelper.getNextBreakTime()
        if (nextBreakTime > 0) {
            val timeRemaining = nextBreakTime - System.currentTimeMillis()
            if (timeRemaining > 0) {
                val minutes = (timeRemaining / 60000).toInt()
                val seconds = ((timeRemaining % 60000) / 1000).toInt()
                binding.nextBreakText.text = getString(R.string.next_break_in, "${minutes}m ${seconds}s")
            } else {
                binding.nextBreakText.text = "Break time!"
            }
        }
    }

    private fun startUpdateTimer() {
        updateRunnable = object : Runnable {
            override fun run() {
                updateNextBreakText()
                handler.postDelayed(this, 1000)
            }
        }
        handler.post(updateRunnable!!)
    }

    private fun stopUpdateTimer() {
        updateRunnable?.let {
            handler.removeCallbacks(it)
        }
    }

    override fun onResume() {
        super.onResume()
        updateUI()
        if (preferenceHelper.isTimerRunning()) {
            startUpdateTimer()
        }
    }

    override fun onPause() {
        super.onPause()
        stopUpdateTimer()
    }
}


