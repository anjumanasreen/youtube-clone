import Button from "./Button"

const list = ["All","Game","Songs","Live","Cricket","Soccer","News","Cooking","Valentines","Music","Recent","computer"]

const ButtonList = () => {

    return(
        <div className="flex">
            <div className="overflow-x-hidden flex">
                {list?.map((btnName, index) => {
                    return <Button key={index} name={btnName} />;
                })}
            </div>
        </div>
    )

}
export default ButtonList