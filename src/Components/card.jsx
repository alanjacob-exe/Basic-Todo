
export default function Card({ index, value, deleteClick, editClick, edit }) {
  return (
    <div>
      <div
        className="w-full border-primary border flex h-16 p-4 mb-2 rounded-md flex-row "
        //   key={index}
      >
        <div className="my-auto mr-2">{index + 1}</div>

        <div className="my-auto fontsemibold">
          <input
            //   id={value}
            type="text"
            value={value}
            onChange={() => {
              //   console.log(e.target.value);
            }}
            placeholder=""
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-row-reverse w-[10%] ml-auto ">
          <button
            className="btn btn-error btn-sm w-full mr-2"
            onClick={deleteClick}
          >
            Delete
          </button>
          <button
            className="btn btn-error btn-sm w-full mr-2"
            onClick={editClick}
          >
            Edit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
