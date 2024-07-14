interface Props {
  currentPage: number;
  count: number | null | undefined;
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

export const Navigation = ({
  currentPage,
  count,
  goToNextPage,
  goToPrevPage,
}: Props) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => goToPrevPage()}
      >
        Prev
      </button>
      <div>
        Page {currentPage} of {count}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => goToNextPage()}
      >
        Next
      </button>
    </div>
  );
};
