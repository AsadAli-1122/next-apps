import CodedBy from "@/components/CodedBy";
import { ShoppingCart } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen w-full bg-PPC-cream flex flex-col justify-center items-center p-4">
      <div className="product-card bg-white text-PPC-green-medium grid sm:grid-cols-2 m-1.5 rounded-xl overflow-hidden max-w-xl shadow-md">
        <div className="h-50 sm:h-full overflow-hidden flex justify-center items-center">
          <img src="/product-preview-card/images/image-product.jpg" alt="image product" className="object-center object-fill" />
        </div>
        <div className="p-8 flex flex-col justify-between space-y-4">
          <h3 className="font-PPC-montserrat text-PPC-gray text-sm tracking-[.35rem] font-light uppercase">PERFUME</h3>
          <h1 className="font-PPC-fraunces text-black text-3xl font-bold leading-7">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-PPC-montserrat text-xs font-medium tracking-wider text-PPC-gray">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <h2 className="font-PPC-fraunces text-PPC-green-lighter text-3xl font-bold flex items-center space-x-4">
            <span>$149.99</span>
            <span className="font-PPC-montserrat text-PPC-gray font-normal text-sm">
              <s>$169.99</s>
            </span>
          </h2>
          <button className="w-full bg-PPC-green-lighter border-2 border-PPC-green-lighter text-white text-sm font-semibold tracking-wider font-PPC-montserrat rounded-lg cursor-pointer px-4 py-2 duration-200 ease-in-out shadow-lg hover:text-PPC-green-lighter active:text-PPC-green-lighter hover:bg-PPC-cream active:bg-PPC-cream flex items-center justify-center space-x-2">
            <ShoppingCart />
<span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="flex py-4 text-center text-xs">
      <CodedBy />
      </div>
    </div>
  );
}
