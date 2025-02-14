"use client";

import { useState } from "react";

// Define the component's props interface
interface Props {
  className?: string; 
  onSearch?: (searchType: string, query: string) => void; 
}

/**
 * SearchBar Component
 * A reusable search component that allows users to search by either subject or name.
 * Features:
 * - Dropdown to select search type (subject/name)
 * - Search input field with dynamic placeholder
 * - Search can be triggered via button click or Enter key
 */
export function SearchBar({ className, onSearch }: Props) {
  // State for tracking the search type (subject or name)
  const [searchType, setSearchType] = useState<"subject" | "name">("subject");
  // State for tracking the search input value
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchType, searchQuery);
    }
  };

  return (
    <div className={`flex gap-4 w-full max-w-3xl mx-auto p-4 ${className}`}>
      {/* dynamic search type */}
      <select
        className="px-4 py-2 border rounded-lg bg-white text-gray-800"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value as "subject" | "name")}
      >
        <option value="subject">Subject</option>
        <option value="name">Name</option>
      </select>
      
      {/* search input field*/}
      <input
        type="text"
        placeholder={`Search by ${searchType}...`}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {/* search button */}
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
