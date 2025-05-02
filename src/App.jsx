import testimonials from "./testimonials";
import labels from "./testimonials";

function Testi({ nama, alamat, nomorTelpon, urlPhotoProfile, status }) {
  return (
    <div className="card p-4 m-4 border-2 w-100 h-26">
      <div className="satu flex gap-2 ">
        <img
          src={urlPhotoProfile}
          alt={``}
          className="rounded-full w-10 h-10"
        ></img>
        <p className="text-2x1">{nama}</p>
        <p className={`rounded-full w-12 h-5 text-xs justify-center align-center text-center ${labels.status == "temen" ? "bg-green-600" : "bg-red-400"}`}>temen</p>
      </div>
      <hr />
      <div className="dua flex text-sm justify-between align-center">
        <div className="dlm flex gap-2">

          <img src="/icons/ic-home.svg" alt="" />
          <p>{alamat}</p>

        </div>
        <div className="dllm flex gap-2">
          <img src="/icons/ic-whatsapp.svg" alt="" />
          <a href={`https://wa.me${nomorTelpon}`} className="text-blue-700">
            {nomorTelpon}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <section className="testi list column gap-5">
      <div className="p-5">
        <p>My Personal</p>
        <p><b>Contact Book</b></p>
      </div>
      {testimonials.map((testi) => (
        <Testi
          key={testi.id}
          nama={testi.nama}
          urlPhotoProfile={testi.urlPhotoProfile}
          alamat={testi.alamat}
          nomorTelpon={testi.nomorTelpon}
          status={testi.status}
        />
      ))}
    </section>
  );
}
