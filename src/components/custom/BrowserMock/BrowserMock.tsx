import { Button } from "@/components/shared";
import { Fragment } from "react";

type ComponentType = {
  name: string;
  category: string;
  image: string;
};
interface Props {
  components: ComponentType[];

  children: (comp: ComponentType) => React.ReactNode;
}
const BrowserMock = ({ components, children }: Props) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-gray-200/60 p-8 shadow-2xl shadow-gray-900/10">
        <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden flex flex-col">
          {/* Browser mockup */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200/60">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 inline-block border border-gray-200">
                uiclub.dev/components
              </div>
            </div>
          </div>

          {/* Component grid preview */}
          <div className="p-6 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {components.map((comp, index) => (
                <Fragment key={index}>{children(comp)}</Fragment>
              ))}
            </div>
          </div>
          <Button path="/components" title="View all" variant="light" />
        </div>
      </div>
    </div>
  );
};

export default BrowserMock;
