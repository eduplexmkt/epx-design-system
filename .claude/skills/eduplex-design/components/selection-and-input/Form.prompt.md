Use FormField to wrap any control that needs a caption, helper text or an error — it is the only thing in the system that ties a label to an input and its messages by id.

```jsx
<FormField>
  <FormLabel required>이메일</FormLabel>
  <FormControl><TextField placeholder="이메일을 입력해 주세요" width={280} /></FormControl>
  <FormMessage>학부모 상담 안내를 받을 주소입니다</FormMessage>
  <FormErrorMessage>{error}</FormErrorMessage>
</FormField>
```

FormField is a plain column with an 8px gap and nothing else — no padding, no background. FormLabel is Label with `htmlFor` filled in, so it stays label1 / bold on `label.neutral`. FormMessage and FormErrorMessage are both label2 (13px / 18px) at regular 400 and differ only in colour — `label.alternative` versus `status.negative` — and both return `null` when their children are empty, so you can bind them straight to a validation state without conditionals. FormControl renders no markup of its own: it clones the single child it is given, so pass exactly one control and let it keep its own props.
