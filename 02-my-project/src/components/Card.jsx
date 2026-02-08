
export default function Card(props)
{           let name =  props.someObj.name;

    return (
        <div className='flex  justify-center'>
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
                <div>
                  <img    //image
                   src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                   alt="test"
                   className="object-cover object-center rounded-t-xl"
                  />
                </div>
           <div className="flex flex-col py-3 px-3 pb-10">
            <div className="flex justify-between ">
              <h4 className="font-bold text-xs">Bored ape nft accidental</h4>
              <h5>Price</h5>
             </div>
                <div className="flex  justify-between">
                  <p>{name}</p>
                  <p>0.01</p>
              </div>
           </div>
        </div>
      </div>
    )
}