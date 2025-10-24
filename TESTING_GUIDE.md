# 🧪 TakeBreak Testing Guide

Quick guide to test all the new features!

---

## 🌐 **Chrome Extension Testing**

### Test 1: Basic Timer ✅
1. Open extension popup
2. Select 15-minute interval (for quick testing)
3. Click "Start Timer"
4. Verify status shows "Timer is running"
5. **Expected:** Countdown appears

### Test 2: Break Notification 🔔
1. Wait for timer to reach 0 (or set to 1 minute for quick test)
2. Notification appears with 2 buttons
3. Verify buttons: "Take Break Now" and "Snooze 5 min"
4. **Expected:** Interactive notification with health message

### Test 3: Take Break Immediately 🧘
1. When notification appears, click "Take Break Now"
2. Full-screen break page opens
3. Verify:
   - 3:00 timer countdown
   - Motivational quote
   - Exercise with instructions
   - Circular progress bar
4. Click "Show Another Exercise"
5. **Expected:** Different exercise loads
6. Wait for 3 minutes
7. **Expected:** Completion celebration

### Test 4: Snooze Once (Count: 1) ⏰
1. When notification appears, click "Snooze 5 min"
2. Wait 5 minutes (or modify SNOOZE_DURATION to 0.5 for testing)
3. New notification appears: "⏰ Your body is still waiting..."
4. Open popup
5. **Expected:** Yellow warning banner showing snooze count

### Test 5: Snooze Twice (Count: 2) ⏰⏰
1. Click "Snooze 5 min" again
2. Wait 5 minutes
3. Notification: "⚠️ Last chance to snooze..."
4. Open popup
5. **Expected:** Orange/yellow warning with stronger message

### Test 6: Snooze Three Times (Force Break!) 🚨
1. Click "Snooze 5 min" third time
2. Notification: "⚠️ This is your last snooze..."
3. Wait 5 minutes
4. **Expected:** Full-screen break page opens AUTOMATICALLY
5. **Expected:** Notification: "Mandatory Health Break"
6. Verify you're in force break mode

### Test 7: Break Completion Stats 📊
1. Complete a break (wait full 3 minutes)
2. Completion message appears
3. Click "Return to Work Refreshed"
4. Open popup
5. **Expected:** Green stats box showing "1 breaks completed!"

### Test 8: Skip Break (Not Recommended) ⚠️
1. When on break page, scroll to bottom
2. Click "I'll finish later"
3. Confirmation dialog appears
4. **Expected:** Warning about cervical health
5. Confirm skip
6. **Expected:** Break tracked as skipped

### Test 9: Snooze Reset After Break ✅
1. Complete a full 3-minute break
2. Timer restarts
3. When next break comes, snooze
4. **Expected:** Snooze count starts at 1 (not continuing from before)

### Test 10: Stop Timer ⏹️
1. While timer running, click "Stop Timer"
2. **Expected:** Timer stops, snooze count resets

---

## 🔧 **Quick Testing Setup**

For faster testing, temporarily modify `background.js`:

```javascript
// Change these for quick testing:
const SNOOZE_DURATION = 0.5; // 30 seconds instead of 5 minutes
const MAX_SNOOZES = 3; // Keep at 3

// In startTimer(), for testing:
delayInMinutes: 1 // 1 minute instead of full interval
```

---

## ✅ **Expected Behavior Checklist**

### Notifications:
- [ ] First notification: Friendly tone, health message
- [ ] Second notification: Gentle reminder
- [ ] Third notification: Firm warning
- [ ] Force notification: Mandatory message
- [ ] All notifications have 2 buttons
- [ ] Clicking buttons works correctly

### Break Page:
- [ ] Beautiful design, purple gradient
- [ ] 3-minute timer counts down
- [ ] Circular progress animates
- [ ] Timer changes to orange in last minute
- [ ] Exercise displays correctly
- [ ] "Next exercise" button cycles exercises
- [ ] Motivational quote shows
- [ ] Completion celebration appears
- [ ] "Return to Work" button closes page

### Popup:
- [ ] Snooze warnings display correctly
- [ ] Warning colors match severity (yellow → red)
- [ ] Stats show completed breaks
- [ ] Timer countdown updates every second
- [ ] Start/Stop buttons work

### Snooze System:
- [ ] Can snooze maximum 3 times
- [ ] Each snooze delays by 5 minutes
- [ ] Snooze count persists
- [ ] After 3 snoozes, break is forced
- [ ] Snooze count resets after break completion
- [ ] Snooze count resets when timer stopped

---

## 🐛 **Common Issues**

### Issue: Notification doesn't appear
**Solution:** 
- Check Chrome notification permissions
- Go to `chrome://settings/content/notifications`
- Ensure notifications are allowed

### Issue: Notification buttons don't work
**Solution:**
- This is a Chrome limitation on some systems
- The break page should still open via automatic trigger after 3 snoozes

### Issue: Break page won't close
**Solution:**
- Complete the 3-minute break
- Or click skip button and confirm
- This is intentional for force breaks!

### Issue: Timer doesn't persist
**Solution:**
- Check `chrome.storage.local` permissions
- Reload extension
- Clear storage and restart

### Issue: Exercises don't load
**Solution:**
- Ensure `exercises-data.js` is loaded before `break.js`
- Check console for errors
- Verify file is in correct directory

---

## 📊 **Success Metrics**

After testing, verify:
1. ✅ All notifications appear at correct times
2. ✅ Snooze count increments correctly (1 → 2 → 3)
3. ✅ Force break triggers after 3 snoozes
4. ✅ 3-minute timer completes correctly
5. ✅ Exercises display with proper formatting
6. ✅ Stats track in popup
7. ✅ Snooze resets after break
8. ✅ UI is motivating, not annoying

---

## 💡 **Testing Tips**

1. **Use short intervals** (1 min) for faster testing
2. **Reduce snooze duration** (0.5 min) for quick cycles
3. **Check console** for debug logs
4. **Test with real intervals** before final approval
5. **Try to abuse the system** - can you skip breaks easily?
6. **Test notification buttons** on different Chrome versions
7. **Verify mobile responsiveness** of break page

---

## 🎯 **Real-World Test**

**The Ultimate Test:**
1. Set interval to 20 minutes (default)
2. Use extension for a full work day
3. Take some breaks, snooze some
4. Verify:
   - Does it feel helpful or annoying?
   - Do you actually do the exercises?
   - Does the 3-minute break feel right?
   - Is the snooze system fair?
   - Do you feel better after breaks?

---

## ✅ **Test Complete When:**
- [ ] All 10 test scenarios pass
- [ ] No console errors
- [ ] UI looks good
- [ ] Timing is accurate
- [ ] Snooze logic works perfectly
- [ ] Force break cannot be easily skipped
- [ ] Exercises display correctly
- [ ] Motivational messages appear
- [ ] Stats track accurately
- [ ] You feel good about using it!

---

**Happy Testing!** 🧪✨


