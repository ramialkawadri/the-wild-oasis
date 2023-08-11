import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="cabins" />;

  const filterParm = searchParams.get("discount") ?? "all";

  let filteredCabins;
  if (filterParm === "all") filteredCabins = cabins;
  else if (filterParm === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  else filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  const sortBy = searchParams.get("sortBy") ?? "startDate-asc";

  const [field, direction] = sortBy.split("-");
  let sortedCabins = filteredCabins.sort((a, b) => a[field] - b[field]);

  if (direction === "desc") sortedCabins = sortedCabins.reverse();

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
