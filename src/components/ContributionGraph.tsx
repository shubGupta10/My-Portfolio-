import { Loader2Icon } from "lucide-react";
import { useState } from "react";

export const ContributionGraph = ({ username }: { username: string }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Contribution Activity</h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
        
        <div className="bg-white rounded-xl border shadow-sm p-4">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[720px]">
              <iframe
                src={`https://ghchart.rshah.org/${username}`}
                className="w-full h-32 bg-transparent"
                frameBorder="0"
                scrolling="no"
                title="GitHub Contributions Graph"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
          
          {isLoading && (
            <div className="flex justify-center py-4">
              <Loader2Icon className="w-6 h-6 animate-spin text-gray-400" />
            </div>
          )}
          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600 border-t pt-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-[#40c463] rounded-sm"></span>
              <span>More contributions</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#ebedf0] rounded-sm"></span>
                <span>Less</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#9be9a8] rounded-sm"></span>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white dark:bg-black rounded-lg border p-3 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">Today</div>
            <div className="font-semibold mt-1">12 contributions</div>
          </div>
          <div className="bg-white dark:bg-black rounded-lg border p-3 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">This Week</div>
            <div className="font-semibold mt-1">47 contributions</div>
          </div>
          <div className="bg-white dark:bg-black rounded-lg border p-3 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">This Month</div>
            <div className="font-semibold mt-1">183 contributions</div>
          </div>
          <div className="bg-white dark:bg-black rounded-lg border p-3 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">This Year</div>
            <div className="font-semibold mt-1">2,847 contributions</div>
          </div>
        </div> */}
      </div>
    );
  };


