import PropTypes from 'prop-types'; 

const Terminal = ({ comment }) => {
  const { comments, author_img, author_name } = comment;
  return (
    <div>
      <div className="h-48 w-96 bg-primary text-primary-content rounded-xl">
        <div className="shadow px-5 py-6 rounded-xl">
          
          <p>{comments}</p>
          <div className="flex justify-center">
            <img src={author_img} alt="" />
            <h1>{author_name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
Terminal.propTypes ={
    comment:PropTypes.object
}
export default Terminal;
