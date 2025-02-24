// Student Interface
interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  birthdate?: Date;
  address?: string;
  grade?: number;
  parentEmail?: string;
  reviews: Review[];
  sessions: SessionStudentRelation[];
}

// Instructor Interface
interface Instructor {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  birthdate?: Date;
  address?: string;
  grade?: number;
  certificationUrls: string[];
  averageRating: number;
  reviews: Review[];
  sessions: Session[];
  subjects: SubjectInstructorRelation[];
}

// Session Interface
interface Session {
  id: string;
  name: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  zoomLink?: string;
  maxAttendees?: number;
  createdAt: Date;
  updatedAt: Date;
  instructorId: string;
  instructor: Instructor;
  subjects: SubjectSessionRelation[];
  students: SessionStudentRelation[];
}

// Review Interface
interface Review {
  id: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  studentId: string;
  student: Student;
  instructorId: string;
  instructor: Instructor;
}

// SessionStudentRelation Interface
interface SessionStudentRelation {
  id: string;
  studentId: string;
  sessionId: string;
  createdAt: Date;
  updatedAt: Date;
  student: Student;
  session: Session;
}

// Subject Interface
interface Subject {
  id: string;
  name: string;
  instructors: SubjectInstructorRelation[];
  sessions: SubjectSessionRelation[];
}

// SubjectInstructorRelation Interface
interface SubjectInstructorRelation {
  id: string;
  instructorId: string;
  subjectId: string;
  createdAt: Date;
  updatedAt: Date;
  instructor: Instructor;
  subject: Subject;
}

// SubjectSessionRelation Interface
interface SubjectSessionRelation {
  id: string;
  sessionId: string;
  subjectId: string;
  createdAt: Date;
  updatedAt: Date;
  session: Session;
  subject: Subject;
}
