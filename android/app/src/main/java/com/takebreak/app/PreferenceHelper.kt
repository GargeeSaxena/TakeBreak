package com.takebreak.app

import android.content.Context
import android.content.SharedPreferences

class PreferenceHelper(context: Context) {

    private val sharedPreferences: SharedPreferences =
        context.getSharedPreferences("TakeBreakPrefs", Context.MODE_PRIVATE)

    companion object {
        private const val KEY_TIMER_RUNNING = "timer_running"
        private const val KEY_INTERVAL = "interval"
        private const val KEY_NEXT_BREAK_TIME = "next_break_time"
    }

    fun isTimerRunning(): Boolean {
        return sharedPreferences.getBoolean(KEY_TIMER_RUNNING, false)
    }

    fun setTimerRunning(running: Boolean) {
        sharedPreferences.edit().putBoolean(KEY_TIMER_RUNNING, running).apply()
    }

    fun getInterval(): Int {
        return sharedPreferences.getInt(KEY_INTERVAL, 20)
    }

    fun setInterval(interval: Int) {
        sharedPreferences.edit().putInt(KEY_INTERVAL, interval).apply()
    }

    fun getNextBreakTime(): Long {
        return sharedPreferences.getLong(KEY_NEXT_BREAK_TIME, 0)
    }

    fun setNextBreakTime(time: Long) {
        sharedPreferences.edit().putLong(KEY_NEXT_BREAK_TIME, time).apply()
    }
}


