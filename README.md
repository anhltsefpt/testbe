Install:
- Docker (optional)
- VS Studio Code
- NodeJS
- Npm/ yarn

`1`. Lấy danh sách file và tên test trong file config.json (folder db)

`2`. Đọc dữ liệu trong file db (folder db) (lấy theo tên file ở step 1) và lưu theo dạng như sau (em có thể viết mới hoặc dùng hàm anh viết sẵn trong utils)
```
{
  "name": "David Nguyen",
  "questions": [
    {
      "question": "",
      "o1": "",
      "o2": "",
      "o3": "",
      "o4": "",
      "answer": "",
      "explanation": ""
    }
  ]
}
```
sau đó lưu các file vào trong folder `processedData` (lưu theo processData: vis dụ: dn.json, hl.json, al.json ....)

`3`. Em tạo 1 container Postgresql

`4`. Em connect và viết query khởi tạo table `Test` với những trường sau:
  ```
    question: string,
    o1: string,
    o2: string,
    o3: string,
    o4: string,
    answer: integer,
    explanation: string
  ```

`5`. Insert tất cả những câu hỏi ở folder processData vào PostgreSQL

