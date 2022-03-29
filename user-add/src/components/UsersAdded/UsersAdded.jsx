const UsersAdded = (props) => {
  return (
    <div className="flex flex-col justify-center items-center m-3 w-2/4 ">
      <table className="table-auto border border-black border-collapse w-2/4 shadow-lg">
        <thead>
          <tr>
            <th className="border border-slate-400 m-3 p-3">User Name</th>
            <th className="text-right border border-slate-400 m-3 pl-3 p-2">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
              return (
                <tr key={user.key}>
                  <td className="border font-medium border-slate-300 p-2 pr-6 pl-4">{user.userName}</td>
                  <td className="text-right border border-slate-300 p-2 ">{user.userAge}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdded;
