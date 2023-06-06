import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'
import React from 'react'

export default function HomeHeader() {
  return (
    <header class="flex justify-end">
        <div class="flex space-x-4 items-center">
            <Link href="https://mail.google.com" class="hover:underline">Gmail</Link>
            <Link href="https://image.google.com" class="hover:underline">Images</Link>
            <Link href="#" class="hover:bg-gray-200 rounded p-4 text-black">
                <TbGridDots />
            </Link>
            <Link href="#">
                <button class="bg-blue-500 px-2 py-2 text-white rounded hover:brightness-90 shadow-sm">Sign in</button>
            </Link>

        </div>
    </header>
  )
}

