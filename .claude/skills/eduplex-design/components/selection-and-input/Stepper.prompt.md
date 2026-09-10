Use Stepper to show where someone is in a short linear flow — 상담 신청, 등록, 결제 — where every step must be completed in order.

```jsx
<Stepper value="info">
  <StepperItem value="agree" label="약관 동의" completedLabel="동의 완료" />
  <StepperItem value="info" label="정보 입력" />
  <StepperItem value="done" label="신청 완료" />
</Stepper>
```

You set only `value`; completion is derived, so every step before the active one fills automatically. The trail is an `<ol>` centred with a 24px gap, each step a 20px circle with an 8px gap to its label, joined by a 16px tight chevron in `label.assistive`. A pending circle is `fill.strong` with the number carrying a 12% black text-shadow; active and completed circles are `primary.normal` and drop the shadow, completed swapping the number for a check. Labels are label2 bold — `label.normal` on the active step, `label.alternative` everywhere else — and a step with no `label` (or no `completedLabel` once complete) renders its circle alone.
