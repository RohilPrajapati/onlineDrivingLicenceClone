import { Outlet } from "react-router-dom"
const UserPage = () => {
    const itemCount = 14
    return (
        <div className='d-flex w-100 mt-5 rounded-4'>
            <div className="w-50 bg-white p-5">
                <Outlet />
            </div>
            <div className='w-50 p-5 term-condition-bg'>
                <h5 className='text-danger'>Online application form and other</h5>
                <ol className='m-2 term-condition'>
                    {Array.from({ length: itemCount }, (_, index) => (
                        <li key={index} className='my-2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia repellat non iusto deleniti repudiandae ad iste eligendi voluptatum! Obcaecati suscipit porro aspernatur at ipsa facere unde vitae doloribus ducimus commodi.
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default UserPage