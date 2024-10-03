import { columns } from "./columns";

import {
  isDeleted_options,
  payment_order_options,
  status_order_options,
} from "@/components/Common/filters";
// import { deleteOrder, fetchOrders } from "@/services/order-service";

import { formOrderFilterAdvancedSchema } from "@/components/schemas/order-schemas";
import { formFilterAdvanceds } from "./filter-advanced-form";
import { FilterEnum } from "@/Types/filter-enum";
import { DataTable } from "@/components/data-table-generic/data-table";

export default function DataTableOrders() {
  const filterEnums: FilterEnum[] = [
    { columnId: "status", title: "Status", options: status_order_options },
    {
      columnId: "paymentMethod",
      title: "Payment method",
      options: payment_order_options,
    },
    { columnId: "isDeleted", title: "Is deleted", options: isDeleted_options },
  ];

  return (
    <DataTable
      deleteData={deleteOrder}
      columns={columns}
      fetchData={fetchOrders}
      columnSearch="description"
      filterEnums={filterEnums}
      formSchema={formOrderFilterAdvancedSchema}
      formFilterAdvanceds={formFilterAdvanceds}
    />
  );
}
