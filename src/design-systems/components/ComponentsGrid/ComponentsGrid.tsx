"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

const list = [
  {
    title: "Orange",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$3.00",
  },
  {
    title: "Raspberry",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png",
    price: "$12.20",
  },
];
const ComponentsGrid = () => {
  return (
    <div>
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ComponentsGrid;
