// import { useState, useEffect } from "react";
// import axios from "axios";

// function Admin() {
//   const [data, setData] = useState([]);
//   const [form, setForm] = useState({ title: "", description: "", type: "" });
//   const [editingId, setEditingId] = useState(null);

//   // Fetch initial data
//   useEffect(() => {
//     axios.get("http://localhost:5000/admin-data").then((response) => {
//       setData(response.data);
//     });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingId) {
//       // Update existing item
//       axios
//         .put(`http://localhost:5000/admin-data/${editingId}`, form)
//         .then(() => {
//           alert("Updated successfully");
//           setEditingId(null);
//           setForm({ title: "", description: "", type: "" });
//           refreshData();
//         });
//     } else {
//       // Add new item
//       axios.post("http://localhost:5000/admin-data", form).then(() => {
//         alert("Added successfully");
//         setForm({ title: "", description: "", type: "" });
//         refreshData();
//       });
//     }
//   };

//   const handleEdit = (item) => {
//     setEditingId(item.id);
//     setForm({
//       title: item.title,
//       description: item.description,
//       type: item.type,
//     });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/admin-data/${id}`).then(() => {
//       alert("Deleted successfully");
//       refreshData();
//     });
//   };

//   const refreshData = () => {
//     axios.get("http://localhost:5000/admin-data").then((response) => {
//       setData(response.data);
//     });
//   };

//   return (
//     <div className="admin">
//       <h1>Admin Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </label>
//         <label>
//           Type:
//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Type</option>
//             <option value="newsletter">Newsletter</option>
//             <option value="church">Church</option>
//             <option value="event">Event</option>
//           </select>
//         </label>
//         <button type="submit">{editingId ? "Update" : "Add"}</button>
//       </form>

//       <h2>Data</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.title}</td>
//               <td>{item.description}</td>
//               <td>{item.type}</td>
//               <td>
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Admin;
