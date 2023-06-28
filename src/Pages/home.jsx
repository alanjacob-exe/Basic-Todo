import { useState } from "react";
import Card from "../Components/card";

export default function Home() {
  const [todoNotes, settodoNotes] = useState([]);
  const [indexValue, setindexValue] = useState();
  const [updateValue, setupdateValue] = useState("");
  const [note, setnote] = useState("");

  // console.log(indexValue + "index");
  const handlePush = (item) => {
    // console.log(item);
    settodoNotes([...todoNotes, item]);
  };

  const handleDelete = (params) => {
    console.log("params" + params);
    const deletedArray = todoNotes.filter((item, index) => index !== params);
    console.log(deletedArray);
    settodoNotes([...deletedArray]);
    // const index = todoNotes.indexOf(params);
    // const dummy = [...todoNotes];
    // dummy.splice(index, 1);
    // settodoNotes([...dummy]);
  };

  const handleUpdate = (index, value) => {
    console.log(index, value);
    const dummy = [...todoNotes];
    dummy.splice(index, 1, value);
    settodoNotes([...dummy]);
  };

  //   const handle1 = () => {
  //     console.log("1");
  //   };

  //   const handle1 = () => {
  //     console.log("2");
  //   };
  return (
    <main className="w-screen h-screen bg-black flex flex-col">
      <div className="h-[10%] w-full flex flex-row">
        <div className="text-white my-auto text-2xl ml-4 font-semibold">
          Basic Todo
        </div>
      </div>
      <section className="w-6/12 h-[70%] text-white border-primary border p-4  m-auto rounded-md flex flex-col">
        <div className="w-full  flex flex-col">
          <div className="font-semibold text-xl mb-2">Insert text</div>
          <div>
            <input
              type="text"
              value={note}
              onChange={(e) => {
                setnote(e.target.value);
              }}
              placeholder="Type here"
              className="input bg-black text-white input-primary w-full mb-2 "
            />
          </div>
          <div>
            <button
              className="btn btn-primary w-[20%] mr-2"
              onClick={() => {
                handlePush(note);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden overflow-y-auto  mt-2 flex-flex-col">
          {todoNotes.map((value, index) => (
            <Card
              index={index}
              value={value}
              key={index}
              deleteClick={() => {
                handleDelete(index);
              }}
              editClick={() => {
                setindexValue(index);

                window.my_modal_1.showModal();
              }}
            />
          ))}
        </div>
      </section>
      <dialog data-theme="dark" id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg flex w-full h-full">Update Value</h3>
          <div className="w-full h-ful">
            <input
              type="text"
              placeholder="Type here"
              value={updateValue}
              onChange={(e) => {
                setupdateValue(e.target.value);
              }}
              className="input bg-black text-white my-2 input-bordered input-primary w-full "
            />
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-primary"
              onClick={() => {
                handleUpdate(indexValue, updateValue);
              }}
            >
              update
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
