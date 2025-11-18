Differences between interface and type in TypeScript

TypeScript-এ আমরা ডেটা স্ট্রাকচার ডিফাইন করার জন্য interface এবং type ব্যবহার করি। দুটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

1️⃣ Interface

অবজেক্ট স্ট্রাকচারের জন্য: interface মূলত অবজেক্ট টাইপ ডিফাইন করতে ব্যবহৃত হয়।

এক্সটেন্ড করা যায়: অন্য interface extends করে প্রপার্টি বা টাইপ এক্সটেন্ড করা যায়।

ডিক্লারেশন মার্জিং সম্ভব: একই নামে একাধিক interface থাকলেও TypeScript স্বয়ংক্রিয়ভাবে মার্জ করে।

শুধুমাত্র অবজেক্ট স্ট্রাকচার: প্রিমিটিভ টাইপ (string, number) আলিয়াস করা যায় না।

উদাহরণ:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Dog এর টাইপ: { name: string; breed: string; }

2️⃣ Type

বৃহত্তর ব্যবহার: type অবজেক্ট, প্রিমিটিভ, ইউনিয়ন বা ইন্টারসেকশন টাইপের জন্য ব্যবহার করা যায়।

কম্বিনেশন: & (ইন্টারসেকশন) ব্যবহার করে একাধিক type একত্র করা যায়।

ডিক্লারেশন মার্জিং সম্ভব নয়।

প্রিমিটিভ টাইপ আলিয়াস করা যায়: যেমন string, number ইত্যাদি।

প্রশ্ন ২: TypeScript-এ any, unknown, এবং never টাইপের মধ্যে পার্থক্য ব্যাখ্যা করুন। উদাহরণসহ দেখান।

TypeScript-এ টাইপ সেফটি বজায় রাখতে এই তিনটি টাইপ গুরুত্বপূর্ণ ভূমিকা রাখে।

1️⃣ Any

যেকোনো মান রাখা যায় এবং যেকোনো অপারেশন করা যায়।

টাইপ চেকিং সম্পূর্ণ বাইপাস করে।

ব্যবহার সম্ভব হলে এড়িয়ে চলা উচিত, কারণ এটি টাইপ সেফটি নষ্ট করে।

উদাহরণ:

let a: any = "Hello";
a = 42; // কোনো error নেই
console.log(a.toFixed(2)); // runtime error হতে পারে যদি টাইপ ভুল হয়

2️⃣ Unknown

যেকোনো মান রাখা যায়, কিন্তু সরাসরি ব্যবহার করা যায় না।

ব্যবহার করার আগে টাইপ চেক বা assertion করতে হবে।

Type-safe উপায়ে ডায়নামিক ভ্যালু হ্যান্ডল করতে সাহায্য করে।

উদাহরণ:

let b: unknown = "Hello";

// সরাসরি ব্যবহার করলে error
// console.log(b.toUpperCase()); // ❌ Error

if (typeof b === "string") {
  console.log(b.toUpperCase()); // ✅ Safe
}

3️⃣ Never

কোনো মান কখনো রিটার্ন করবে না।

সাধারণত ফাংশন যা সবসময় error throw করে বা ইনফিনিট লুপে থাকে।

উদাহরণ:

function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while(true) { }
}
