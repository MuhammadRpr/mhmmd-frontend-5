export default function DaftarLabel() {
    const labels = [
        { status: "Segar" },
        { status: "musuh" }

    ];

    return (
        <div className="border border-amber-400 p-5">
            {labels.map((label) => (
                <div className="p-2 border">
                    <p className={`rounded-full p-1 text-xs w-fit ${label.status == "temen" ? "bg-green-600" : "bg-red-500"}`}>
                        {label.status}
                    </p>
                </div>
            ))}
        </div>
    );

}
