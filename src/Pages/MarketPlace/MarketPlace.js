import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion"
import Loading from "../../Shared/Loading/Loading";

const MarketPlace = () => {
  const [cartProduct, setCartProduct] = useState(null);

  // console.log(cartProduct);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
    <div className="pt-10 pb-4 absolute z-[999] w-full backdrop-blur-sm bg-[#F0F2F5]/50 dark:bg-[#2a2a2a]/50">
    <motion.div animate={{ x: 10 }} transition={{ ease: "easeOut", duration: 0.85 }}>
      <h1 className="text-3xl font-bold dark:text-white text-black border-l-4 border-[#FF3F4A] pl-2">
        Market Place
      </h1>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p className="text-gray-400 dark:text-[#B8B8B8]">Buy your choiceful product</p>
      </motion.div>
    </div>

    <div className=" w-[90%] md:w-[98%] mx-auto relative rounded-md grid grid-cols-1 md:grid-cols-4 gap-y-10 h-screen overflow-y-auto mb-4 pb-52 home pt-32">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setCartProduct={setCartProduct}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
