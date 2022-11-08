import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Home from "../pages/Home/Home";

export default function SideBarMenu() {
  return (
    <div className="flex w-100 align-center bg-black h-10">
      <NavigationMenu.Root className="w-full" orientation="horizontal">
        <NavigationMenu.List className="flex align-center justify-around p-2">
          <NavigationMenu.Item className="text-white text-2xl">
          <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="text-white text-2xl">
          <NavigationMenu.Link href="/login">Logout</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  );
}
