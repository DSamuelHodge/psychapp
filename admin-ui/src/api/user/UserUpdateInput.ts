export type UserUpdateInput = {
  age?: string | null;
  birthdate?: Date;
  director?: string | null;
  disabilityId?: string | null;
  firstName?: string | null;
  grade?: string | null;
  lastName?: string | null;
  parentguardian?: string | null;
  password?: string;
  psychologist?: string | null;
  roles?: Array<string>;
  school?: string | null;
  studentAddress?: string | null;
  studentEmail?: string | null;
  studentId?: string | null;
  teacherOfRecord?: string | null;
  username?: string;
};
