###What are some differences between interfaces and types in TypeScript?

TypeScript আমাদের JavaScript-এর উপরে টাইপ সেফটি এনে দেয়। কিন্তু নতুনদের জন্য কখন কোন টুল ব্যবহার করা উচিত তা বোঝা মাঝে মাঝে জটিল হয়ে যায়। এখানে আমরা দুটি গুরুত্বপূর্ণ বিষয় নিয়ে আলোচনা করবো:

1️⃣ Interface বনাম Type
2️⃣ Any, Unknown, এবং Never টাইপ

১. Interface vs Type

TypeScript-এ আমরা ডেটা স্ট্রাকচার ডিফাইন করার জন্য দুইটি মূল টুল পাই: interface এবং type। যদিও দুটির কাজ অনেকটা মিল, কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

Interface

এক্সটেন্ড করা যায়: অন্য interface extends করে ব্যবহার করা সম্ভব।

ডিক্লারেশন মার্জিং: একই নামে একাধিক interface থাকলে TypeScript তাদের অটোম্যাটিকভাবে মার্জ করে।

শুধুমাত্র অবজেক্ট স্ট্রাকচার: প্রিমিটিভ টাইপ (string, number) আলিয়াস করা যায় না।

উদাহরণ:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Dog এর টাইপ: { name: string; breed: string; }

Type

কম্বিনেশন করা যায়: & (ইন্টারসেকশন) ব্যবহার করে অন্যান্য type-এর সাথে কম্বাইন করা যায়।

ডিক্লারেশন মার্জিং সম্ভব নয়।

প্রিমিটিভ টাইপ আলিয়াস: যেমন string, number ইত্যাদি।

উদাহরণ:

type AnimalType = { name: string };
type DogType = AnimalType & { breed: string };

// DogType: { name: string; breed: string; }


সারসংক্ষেপ:

জটিল অবজেক্টের জন্য interface।

প্রিমিটিভ টাইপ, ইউনিয়ন বা ইন্টারসেকশনের জন্য type।


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
