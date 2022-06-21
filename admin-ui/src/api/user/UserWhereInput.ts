import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  age?: StringNullableFilter;
  birthdate?: DateTimeFilter;
  director?: StringNullableFilter;
  disabilityId?: StringNullableFilter;
  firstName?: StringNullableFilter;
  grade?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  parentguardian?: StringNullableFilter;
  psychologist?: StringNullableFilter;
  school?: StringNullableFilter;
  studentAddress?: StringNullableFilter;
  studentEmail?: StringNullableFilter;
  studentId?: StringNullableFilter;
  teacherOfRecord?: StringNullableFilter;
  username?: StringFilter;
};
