import { NavLink } from "react-router-dom";

const NewsItem = ({ to, image, content }) => {
  return (
    <NavLink to={to} className="flex flex-row gap-4 w-full">
      <img className="w-1/2 object-cover rounded-xl" src={image} />
      <div>
        <h1 className="font-bold text-xl">Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid velit, voluptas pariatur laboriosam ullam, enim itaque ipsum sapiente reiciendis inventore dolor</p>
      </div>
    </NavLink>
  )
}

export default NewsItem;