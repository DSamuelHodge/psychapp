import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Age" source="age" />
        <TextField label="Birthdate" source="birthdate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Director" source="director" />
        <TextField label="Disability ID" source="disabilityId" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Grade" source="grade" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Parent Guardian" source="parentguardian" />
        <TextField label="Psychologist" source="psychologist" />
        <TextField label="Roles" source="roles" />
        <TextField label="School" source="school" />
        <TextField label="Student Address" source="studentAddress" />
        <TextField label="Student Email" source="studentEmail" />
        <TextField label="Student ID" source="studentId" />
        <TextField label="Teacher of Record" source="teacherOfRecord" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
