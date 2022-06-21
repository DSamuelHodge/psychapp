import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Age" source="age" />
        <DateInput label="Birthdate" source="birthdate" />
        <TextInput label="Director" source="director" />
        <TextInput label="Disability ID" source="disabilityId" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Grade" source="grade" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Parent Guardian" source="parentguardian" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Psychologist" source="psychologist" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="School" source="school" />
        <TextInput label="Student Address" source="studentAddress" />
        <TextInput label="Student Email" source="studentEmail" type="email" />
        <TextInput label="Student ID" source="studentId" />
        <TextInput label="Teacher of Record" source="teacherOfRecord" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
