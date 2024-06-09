import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const PasswordEntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="password" source="password" />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
