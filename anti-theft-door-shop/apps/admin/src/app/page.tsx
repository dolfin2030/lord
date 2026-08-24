import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/nestjs-query";
import axios from "axios";
import { ChakraUIInferencer } from "@refinedev/chakra-ui-inferencer";
import { ThemedLayoutV2 } from "@refinedev/chakra-ui";

const API_URL = "http://localhost:3002/api/v1";

export default function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL, axios.create())}
      resources={[
        {
          name: "products",
          list: "/products",
          create: "/products/create",
          edit: "/products/edit/:id",
          show: "/products/show/:id",
        },
        {
          name: "categories",
          list: "/categories",
          create: "/categories/create",
          edit: "/categories/edit/:id",
          show: "/categories/show/:id",
        },
        {
          name: "brands",
          list: "/brands",
          create: "/brands/create",
          edit: "/brands/edit/:id",
          show: "/brands/show/:id",
        },
        {
          name: "orders",
          list: "/orders",
          show: "/orders/show/:id",
        },
        {
          name: "users",
          list: "/users",
          create: "/users/create",
          edit: "/users/edit/:id",
          show: "/users/show/:id",
        },
        {
          name: "blog_posts",
          list: "/blog-posts",
          create: "/blog-posts/create",
          edit: "/blog-posts/edit/:id",
          show: "/blog-posts/show/:id",
        },
        {
          name: "coupons",
          list: "/coupons",
          create: "/coupons/create",
          edit: "/coupons/edit/:id",
          show: "/coupons/show/:id",
        },
      ]}
    >
      <ThemedLayoutV2>
        <ChakraUIInferencer />
      </ThemedLayoutV2>
    </Refine>
  );
}
