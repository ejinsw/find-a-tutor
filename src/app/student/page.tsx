'use client'

/**
 * STUDENT HOME PAGE
 */

import { SearchBar } from "./SearchBar";
import { SessionCard } from "./SessionCard";
import { Grid, Container } from '@mantine/core';
import { useState } from 'react';

// Fake Data
const sessions = [
  {
    tutorName: "John Doe",
    rating: 4.5,
    subject: "Mathematics",
    description: "One-on-one tutoring session focusing on calculus and algebra.",
  },
  {
    tutorName: "Jane Smith",
    rating: 5.0,
    subject: "Physics",
    description: "Advanced physics concepts including quantum mechanics and relativity.",
  },
  {
    tutorName: "Mike Johnson",
    rating: 4.8,
    subject: "Chemistry",
    description: "Organic chemistry and molecular structures explained clearly.",
  },
  {
    tutorName: "Sarah Wilson",
    rating: 4.7,
    subject: "Biology",
    description: "Comprehensive review of cellular biology and genetics.",
  }
];

export default function Page() {
  const [filteredSessions, setFilteredSessions] = useState(sessions);

  // Search function
  const handleSearch = (searchType: string, query: string) => {
    if (!query.trim()) {
      setFilteredSessions(sessions);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = sessions.filter(session => {
      if (searchType === 'name') {
        return session.tutorName.toLowerCase().includes(searchTerm); // find tutor w same name
      } else {
        return session.subject.toLowerCase().includes(searchTerm); // find tutor w same sbjt
      }
    });

    setFilteredSessions(filtered);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <SearchBar onSearch={handleSearch} />
      <Container size="xl" mt="md">
        <Grid>
          {filteredSessions.map((session, index) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
              <SessionCard 
                {...session}
                onJoinSession={() => {
                  console.log('Joining session...', session.tutorName);
                }}
              />
            </Grid.Col>
          ))}
          {filteredSessions.length === 0 && (
            <Grid.Col span={12}>
              <div className="text-center py-8 text-gray-500">
                No sessions found matching your search criteria.
              </div>
            </Grid.Col>
          )}
        </Grid>
      </Container>
    </section>
  );
}
