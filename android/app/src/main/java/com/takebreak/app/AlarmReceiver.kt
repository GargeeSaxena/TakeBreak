package com.takebreak.app

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class AlarmReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        val notificationHelper = NotificationHelper(context)
        notificationHelper.showBreakNotification()

        // Update next break time
        val preferenceHelper = PreferenceHelper(context)
        val interval = preferenceHelper.getInterval()
        val nextBreakTime = System.currentTimeMillis() + (interval * 60 * 1000)
        preferenceHelper.setNextBreakTime(nextBreakTime)
    }
}


