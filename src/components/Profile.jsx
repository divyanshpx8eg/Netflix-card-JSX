// 16

function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name = "Alice"
                age = {30}
                greeting = {
                    <div>
                        <strong>Hi, Alice Have a wonderFul day!</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading , Hiking</p>
                <button>Contact</button>
            </ProfileCard>


            <ProfileCard
                name = "Bob"
                age = {25}
                greeting = {
                    <div>
                        <strong>Hi, Bob Have a wonderFul day!</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading , Hiking</p>
                <button>Contact</button>
            </ProfileCard>


        </div>
    )

};

export default Profile;
function ProfileCard({name , age , greeting , children}){
    return(
        <>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <div>Greeting : {greeting}</div>
            <div>{children}</div>
           
        </>
    )
}