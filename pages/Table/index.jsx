import React from "react";
import Table from "../../Components/PageComponents/Table/table";
import Layout from "../../HOC/Layout/Layout";
export const getServerSidePorps = async () => {
  const res = await fetch("http://localhost:5000/HomeRoute");
  const TData = await res.json();
  return {
    props: TData,
  };
};
export default function Index({ TData }) {
  console.log("Table", TData);
  return (
    <div>
      <Layout>
        {/* <TableHead /> */}
        <Table TableData={TData} />
      </Layout>
    </div>
  );
}

// export default index;
