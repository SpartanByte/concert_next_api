// pages/api/hello.ts

export default function handler(string: req, res) {
  res.status(200).json({ message: 'Hello from API with App Router!' });
}