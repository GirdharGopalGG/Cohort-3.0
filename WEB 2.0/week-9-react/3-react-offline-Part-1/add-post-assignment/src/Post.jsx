export function PostComponent({ name, subtitle, time, image, desc }) {
  return (
    <div
      style={{
        margin: 20,
        padding: 10,
        backgroundColor: "#2c3e50",
        borderRadius: 10,
        color: "#bdc3c7",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 10,
        }}
      >
        <div>
          <img
            src={image}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 15 }}
          />
        </div>
        <div>
          <div>
            <b>{name}</b>
          </div>
          <div>{subtitle} </div>
          {time && (
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 3 }}>{time}</div>
              <div>
                <img
                  width="20"
                  height="20"
                  src={
                    "https://img.icons8.com/?size=100&id=16153&format=png&color=737373"
                  }
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>{desc}</div>
    </div>
  );
}
