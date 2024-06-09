import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PasswordEntryList } from "./passwordEntry/PasswordEntryList";
import { PasswordEntryCreate } from "./passwordEntry/PasswordEntryCreate";
import { PasswordEntryEdit } from "./passwordEntry/PasswordEntryEdit";
import { PasswordEntryShow } from "./passwordEntry/PasswordEntryShow";
import { EncryptionDetailsList } from "./encryptionDetails/EncryptionDetailsList";
import { EncryptionDetailsCreate } from "./encryptionDetails/EncryptionDetailsCreate";
import { EncryptionDetailsEdit } from "./encryptionDetails/EncryptionDetailsEdit";
import { EncryptionDetailsShow } from "./encryptionDetails/EncryptionDetailsShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PasswordManagerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PasswordEntry"
          list={PasswordEntryList}
          edit={PasswordEntryEdit}
          create={PasswordEntryCreate}
          show={PasswordEntryShow}
        />
        <Resource
          name="EncryptionDetails"
          list={EncryptionDetailsList}
          edit={EncryptionDetailsEdit}
          create={EncryptionDetailsCreate}
          show={EncryptionDetailsShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
