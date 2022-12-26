
// Yêu cầu 1:
// Tạo hàm sắp xếp lại danh sách tòa nhà đáp ứng các điều kiện sau:
// INPUT: Danh sách tòa nhà ban đầu từ mảng buildingList tại file ./script.js
// OUTPUT: In (console.log) ra danh sách tòa nhà mới đáp ứng các điều kiện bên dưới.
//  Sắp xếp tên tòa nhà theo bảng chữ cái
// Sắp xếp các tầng trong tòa nhà theo thứ tự từ trên xuống dưới
// Các tầng có kí hiệu B là các tầng hầm:
// Các tầng Có kí hiệu M là các tầng lửng: 2F>M1F>1F
// VD: ...>F4>F3>MF2>F2>MF1>F1>B1>B2>...



// Yêu cầu 2:
// Tạo hàm tìm kiếm địa chỉ của công ty có tên chứa từ khóa tìm kiếm
// INPUT: Mảng buildingList tại file ./script.js
// OUTPUT: In (console.log) ra danh sách địa chỉ của công ty cần tìm.
// Ví dụ: từ khóa tìm kiếm là "s" sẽ in ra kết quả như sau:

// 1 Công ty có thể có nhiều địa chỉ
// Chỉ cần tên công ty có chứa từ khóa tìm kiếm

const buildingList = [
    {
      id: 101,
      name: 'KeangNam',
      floors: [
        {
          code: "1F",
          companies: ["Starbucks", "Highlands Coffee"]
        },
        {
          code: "4F",
          companies: ["Samsung", "LG"]
        },
        {
          code: "2F",
          companies: ["Vin Fast", "Honda", "Toyota"]
        },
        {
          code: "B1F",
          companies: ["BigC"]
        },
        {
          code: "M4F",
          companies: ["CGV", "LG", "Zara", "Nike"]
        },
        {
          code: "B2F",
          companies: []
        },
        {
          code: "5F",
          companies: []
        },
        {
          code: "6F",
          companies: ['NTQ', "FPT Software", "FPT Telecom", "CGV"]
        },
        {
          code: "M2F",
          companies: ["Canifa", "Zara", "Nike", "Adidas"]
        },
        {
          code: "3F",
          companies: ["FPT Software", "Viettel"]
        },
      ]
    },
    {
      id: 102,
      name: 'Lotte',
      floors: [
        {
          code: "1F",
          companies: ["Lotte", "Highlands Coffee"]
        },
        {
          code: "4F",
          companies: ["CGV", "LG", "Zara", "Lotte"]
        },
        {
          code: "3F",
          companies: ["Vin Fast", "Honda", "Toyota"]
        },
        {
          code: "B1F",
          companies: ["BigC"]
        },
        {
          code: "M4F",
          companies: ["Samsung", "LG"]
        },
        {
          code: "B3F",
          companies: []
        },
        {
          code: "B2F",
          companies: []
        },
        {
          code: "M2F",
          companies: ["FPT Software", "Zara", "Nike", "Adidas"]
        },
        {
          code: "2F",
          companies: ["Canifa", "Viettel"]
        },
      ]
    },
    {
      id: 103,
      name: 'SongDa',
      floors: [
        {
          code: "1F",
          companies: ["NTQ"]
        },
        {
          code: "4F",
          companies: ["CGV", "LG", "Zara", "Lotte"]
        },
        {
          code: "3F",
          companies: ["Vin Fast", "Viettel", "Toyota"]
        },
        {
          code: "B1F",
          companies: ["BigC"]
        },
        {
          code: "M4F",
          companies: ["NTQ", "LG"]
        },
        {
          code: "B3F",
          companies: []
        },
        {
          code: "B2F",
          companies: []
        },
        {
          code: "M2F",
          companies: ["FPT Software", "Zara", "NTQ", "Adidas"]
        },
        {
          code: "2F",
          companies: ["Canifa", "Viettel", "Honda"]
        },
      ]
    },
  ]
  buildingList.map(function(value){
    console.log(value);
})