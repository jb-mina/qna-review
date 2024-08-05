import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              QnA Review
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/stories"
                className="hover:bg-primary-dark px-3 py-2 rounded-md"
              >
                Stories
              </Link>
              <Link
                href="/bookshelf"
                className="hover:bg-primary-dark px-3 py-2 rounded-md"
              >
                Bookshelf
              </Link>
              <Link
                href="/profile"
                className="hover:bg-primary-dark px-3 py-2 rounded-md"
              >
                Profile
              </Link>
              <Link
                href="/points"
                className="hover:bg-primary-dark px-3 py-2 rounded-md"
              >
                Points
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-dark focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* 여기에 햄버거 메뉴 아이콘 추가 */}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/stories"
              className="hover:bg-primary-dark block px-3 py-2 rounded-md"
            >
              Stories
            </Link>
            <Link
              href="/bookshelf"
              className="hover:bg-primary-dark block px-3 py-2 rounded-md"
            >
              Bookshelf
            </Link>
            <Link
              href="/profile"
              className="hover:bg-primary-dark block px-3 py-2 rounded-md"
            >
              Profile
            </Link>
            <Link
              href="/points"
              className="hover:bg-primary-dark block px-3 py-2 rounded-md"
            >
              Points
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
