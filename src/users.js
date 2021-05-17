import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  required
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const ClassFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="username" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<ClassFilter />}>
    <Datagrid>
      <TextField source="username" />
    </Datagrid>
  </List>
);
