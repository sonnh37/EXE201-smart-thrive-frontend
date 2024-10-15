import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/services/model/user";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Drop() {
  const { push } = useRouter();

  const handleSelectStudent = () => {
    localStorage.clear();
    push("/login");

    toast.success(`Log out succesully`, {
      richColors: true,
    });
  };

  const [user, setUsername] = useState<User | null>(null);

  useEffect(() => {
    // Kiểm tra xem `localStorage` có dữ liệu userId không
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchUsername();
    }
  }, []);

  // Hàm gọi API để lấy dữ liệu username
  const fetchUsername = async () => {
    try {
      // const response = await UserService.getById(id);
      // console.log(response);
      const user = new User();
      user.username = localStorage.getItem("userName")?.toString();
      setUsername(user); // Lưu username vào state
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <a href={"/login"} >
            Login/Register
          </a>

        </MenuButton>
      </div> */}
      {user?.username ? (
        <div className="p-4 text-green-800 rounded">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {user?.username}
          </MenuButton>
        </div>
      ) : (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>

        // Trống nếu không có userId
      )}
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="/account/profile "
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                onClick={handleSelectStudent}
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
