import Cartes from './component/Cartes'
import { useState } from 'react'
import './App.css'
import Config from './component/config';
import TagC from './component/TagConfig';

function App() {
  //check value(initialization)
  const [t,ts] = useState([]);
  //change number(initialization)
  const [cout,setcout] = useState(1);
  //change name(initialization)
  const[a,b]=useState("Nom Pokemon");
  //change description(initialization)
  const [c,d]=useState("Description");
  const change= (e) => {
    if (Number(e.target.value)>0){
      setcout(e.target.value);
    }
  }
  const changeNom= (e)=>{
    b(e.target.value);
  }
  const changeExp= (e)=>{
    d(e.target.value);
  }
  const changeTags = (e) => {
    const { value } = e.target;
    ts((prevTags) => {
      if (e.target.checked) {
        //on rajoute l'élément  si la case est cochée
        return [...prevTags, value];
      } else {
        //si non, on retire l'élément
        return prevTags.filter((tag) => tag !== value);
      }
    });
  };
  const tables=[
    {lien:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITERUTEhIWFhUVFhUVFxcVFxUVFRUWFxUWFxUYFRYYHiggGBolGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS0rLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABCEAABAwEFBQUGAwUGBwAAAAABAAIDEQQFEiExBkFRYXETIoGRoQcyscHR8BRCUiMzcuHxFWKCkqKyFkNEg5PC0v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAQACAwACAwAAAAAAAAABEQIhMQMSQVFxBBNh/9oADAMBAAIRAxEAPwDxBCEIUEIQgFQkSpmEIQgwhCEw6SEJAuwUw5ogJzBRGBGHjiiVozUiKKvium2U16f1T+okRsK7jGZUnsAClfHTKmZoqkxX1MR51XQGf3xXeHDl4elVxG0knx+KejCMZmuHhSY9T966fFJHZicuWf34JXyMQwEhCkujoCm8H38VOJsNUSEJ1rUgajCxzRNlOErlKhyhCFJBIlS0SGOUJUiAEIQgghCEAIQhACEIQCoQhEMtUq5QqPXWFIAumhKngc4UtF1Tiu2s3JwEjcpLXUoadU3BHU0O/wCO5Pvs5bQbjv4Ebiqmr5iTBDU5fZ/p8F6jPs5Y3XWbTY4zJMwAydoSSABV4wtIHReaWdpyy4V67j98V6X7Nb0wSYHDuva5pG40zpTpUJ2ePC+p4YWa7mSQtmjGRIa5v6X/AEI08VF/s51AQMwP/ZXFvZ/Z9vtFnIxQ46YdMUTqPjLTuIBFDyVy/aGyMH7Gy43EZumdlp+hv1RKU7meWP8A7Kc/dpid1o0k/BMSXS/FQf3R8z6Bap21024RtGeTY2AfBdR7VSV78cTwdQ6NufiKH1S0v9kv4zNhutz5GNaKmuXXd8ludhrNE+3vY3D+Hs0L3SEgESEUaS6uozNBwaqa23+xsbuxs4jkcC3EHuIaDqWg5h26tcla7DxGG6bdaKd6VzYWniGip9XnySovW+IzG0RjntckkMLYoq91jRQUA1IGQJOZplmqC1RNxUGgy8q1JV/abR3RG3X8x31JqR8B4BVlqhAdhGrteTR9T95q/UafXwqixMvbuU+0kAZffBQHKbWfRorldFIQoZuUUXbWbykc5GBykQhSAhCEiIhCEEEIQgBCEIAQhCDKhCEwEISgJwOmpws3hDGKSyE0qFpObi5DDASNPqpYj7lRnz3tSQRHFTQqxs8bge8M9+WRHNORUiLZ7JiGeXA8OHgpsDNzhvz4gjRwUgQZ0AoOenQqWbGRkQeu8U48x6hVJjXP4RpLOA7EDk7WmdDvp4/ELV7L92WOo1c0/DTkVSsgwajP9P6gf08/otBss0PmbE5w7xaWEcKg/YRWl5z2c9r91YJLLPvdEYnczEe6f8rgPBefukXpvtphcJYT+QMIHAGufyXlcrljvhwacMiVspUYPXWNLS1OY6q9PjsVLhhbHmHSOL6a1L3GnX3QvJ4JF7d7PbPW55MRoMT3g8MNMx5KpV83zHl9ospY4tAq7Tq6uvStfJqg3jZgzfVxyPXh0G/xWmnc3N4FM8hv4AKjkhD3F7jUDcN/IffAcVvfTuvOKS0WQ0B3HTmq2aKnT4rR2oVOep4bm7mgcOap7Ye8Mq/e76qKw75kQDFvOS5LKZqU5mdXZncNwTb2V+/gpxGeER7iVwQnnR03rhwCiys8cUSUXYSFFgcoQUKQQoSpEiCEIQQQhCAEqRKgwhCEwAnGtXATjCqhnmin3l5p6A59fvXemce70UiCA6jTgr3+FRa2WKpzat5snseJv2r3hkDR3nu3cm81lLgY3EKV6aEdK6+C3m30xstis9mGRcwyuGlS40z5igV9Ner9ZsWjI7haezMjq6YiTTh95Kv2h2c7ACWGQSQPya7WnAOpy38vA+R9o4urVevbBWl0l3WmNx90Nc3FoDUUHjoo1nx3ZWKmaakOzppxG8DrwKtdnwRIxzSDhIc3d1byoa+BXN4QYnnC2jgM28RXQcaFS7pIB7zS2oOWlHcuIrnyr0Wl9Oz+157X7QJIoXAatxdQ7eOjgQeGXELxufJe53tHC+w2Z9pb3IrS2OSu6OarHEkbquaa8qryTau5vw1qlgaXOa3E5pIqezDnNrUa0w5lYV5/cy4z0jqIY6qZldSoXEb1KFvYxiIXu92UguelaY/OjqZdTl5heUbA3Mye1RxynCzJzsw0lgqSc93dPgDwXqV6SRyWGN7RSIvnewaAt7V7YyeFWgdBVVPyNfim9yMPe7mghoAcaZ/pBPTWmnnzVHJUNoBmTXPnvd8m8PW2try91dBSlSKV0qabhuA4U8Yb7O05CpA1O4HhXeflyqt3b1zVVLGBp3ydTur9B97kx+HZWp71OGleA4/BWNoeQKUB5EUa0Djx40UOS0Ya5E8zl/RLdRZntW2wNHU7h8z99FDf5KcQHnujx/KFFmAGh8fokzs/UGVvFNED70T8r+SZMZKisqbcUiKIUpIhCFICRKkSIIQhBBCEIBUIQgwhAXSqQEC6C6DV3EzNVhw/Zmmu48t/qrONh/LlvofsLXbC7EOtbDLK5sULci9+88Gg0qtr/wAHXSwYRbc9MyHNr0OnmrlkaTqT9YvY+xdtIwObhOJuY67wflVSdv77/FSOjeM4pHiNw/RWmBw3jIEHdn4bKyXZZbC38TLKwgV7EMdXtCBkf7orTJeQPteKQuJzJJ8yiH1ZUy6dlLbMaxWdzmilXVYGiu8kkL0Gw2MWWyugBBe4gyOywkgZMaTuGetK8lJ9lVsa4yQO0kZQdRoo96QuErmOBxAkZUPo4ivSqJ7xXxcTarI4nPqBmW5kEGtByOo6UIVjd9gdK3MUw5iuY5130pv4Jm9r3ju6JpewPlf3msqWtazMAvqKtJzoB5qitHtVmczDFDFCf1M7xNP4gUW407+aTY9DtliM122mzgYnPYSwanG3MAf5fM8KLwm12qR+Bsj3ExVDcRzaMg5tdaGlKVW3uX2oTMZI20tD3OY/s5WANc15bQY2jIt5ihFN6yuy10S3jazA1wBIJxuqaUH5qahQ5e7OrsUVvhqS8UaCTRozpU5CvBN2KzYjrSnqpt8NMMr7O8DHG4sdQ1FWmhod4S3BZ3zSshibikkcGtA3k/ICpPIKGSdhknlAjZ+0e1sQEdQXNoGgHPOoAB3Fex3sY47PBZ6YzBExlP8Al4mtAc51NRUH7yTtxbKw2GItZ37Q5v7SalS0n8sQOn80tpuwuOF1MOlAcid+J35j6K46fh5m7WNZD2xe9xqxpq53ujgADu36Z60RMcTXBjGtAGTcmgaZmug658itDed2NdSONpY0c8IPM171enqqabZ+jqNa4jeXUaCeOE/Nay669mbGYcwAOc0GR2/CD2bepPvHrQKstERcSXNJO4ZHwoMh09FuLVspaH0o12EaZnD4ZAegTJ2QlLaVa0aZuazLoc079WV6157M5+h7o4Gg9Bqoz/E9BQea9En2KJpQs599mfqosuxMzfdjDuYIefAAkqCvOvO5GcB9+Caceq094XDOHEuikH8TS0dc1nrTZXAmo9VNjC84iFBau80jilIg0UIKFJBCEKQRCEIIIQhAKhCE4YQlQEzdNVjdgBcK+pUADopVkloR9VUVK9A23vd0ZjssRwxRQwhoGhL42yOdzJLysay0urqVfXgwWqBkjATLEzA8Z9+NvuuGWrRl0A4LPNNFV1N2VobxvAvsDWF2bJW06Oa+o/0g+CzcbqFO2i0EtDRoCT1cd56DTqeKjkoGtlsnfRgla+uhBXrP/FV2zh0rpMDmglwcK6Cpwr57ZPRONkcQeadmq16HafaQwTvljssdXHV7WvkwjIAuOgoBkKD4q0EFhvuB4bCyz21rSWPYA0PI0DwPeadM8xXJeQnNa/YO2/h7Q2UmjWVe88GNzd9OpCnNR7YskioIoQaEcCNQtr7Lb7dZLQ97IRKXRnu1wvyz7hORPI+axdttGOV76Uxve+nDE4up6p+wWp0b2uaaEaFR6qfRi+ZnyzSSSNIc573O5FziSPVegewNrBbpSQMfYOwaV1GKleSyFplEjsTsid4TEkZjIcDQ7i3JPDfTF6WiGzjtJahxzwtq4nqcgOpIAXmu0ftMkDyLMxrB+qgeT/ipTyXmQtLyQXOxEb3UJ9U6/G7Mmp5mqvmQ9ej7Le0JzpMNqa1wPuyBtHNPPDTE3koe0XtDnimkhjEbcDiMUbQKjUGpzzBCwllqHCvEfFQr7jc20yh5zxl1eId3m/6SFHaue7Ggte21qec5Xear37QzHWQ+aq7NYJpP3cUj/wCBjneoCsWbL20/9NL4tw/7qLLF/bon9uTfrPmU/DtLO3SR3mmjstbQKmzvpywn0BUC1XfLH+8jezm5jmjzIojB9ummh22tFKF9RwOi7ffEE372FteIGE+ixgKeikVTwPvf1d2q64XZxvpyd/8ASz94WJzDQiinsmKf7eowuzbwO7odyv7FcrOIU232PD3m5tPpyKhJWICEIUkRCEIIIQhAKhCE4YShIlATN20KVDETwHWijNyT0Up/oqmG01wxSNcC0tqM61FfjVTNrrpwYbRG2jJMnAAgNlpmKbgaVHjwVHdpNRR1M+P1qvXLju6zvuq1S2pxwFuAO3hzaFpYDlUOor1pc+rxohI2zl2gTjoqOoDXn/JaC78DIyXUo2jqfme4kDM7hn6Jzn+WU9qg3RO1rXujIa6uEktzpkSBWtOdEgcGjPMqRed6PkdUncAAMgANABuCcuHZ20Wx1IwGsrR0r8o28aH8x5D0Rsnpf9KeeYE1okdanYcNTh1I3GmleKnXxdTrLO+F+bmOpXc4atc3kQQfFVwbmptRTDRVydLs0s0SZrRZVnUxkiekfVqrjIV3BayDnmEaEqKQHI+B4LpkhTMr2ggg6odMKVT0zxcV7RFZofwdntAijMrohV5jDpCOAfQkdF4nDKDovYLU1rbFZI3HC4wNNHVANSaUPHrqrnlr8U3pX3jfD3g5VA6g/HPyVHZ70qTx0Io6vrUp2e1iLIhwNfezzHAjQKnvCepJaSRxbTLlhotfDsvNWsd5BppmKbsJBonX3/lRhwkdTl4lZr8U8auqOI18q0Q6UU94Hk4U+FEe03PxZTus85pLHGCfzsHZSE+Ao7/ECqO33MWAvid2jBrlR7R/ebw5j0SW6TLlvBz8io1ktxjIIqOhWfXMYd4jgp4FSbdZ2kCWPJrjQt/S/XLkRnyoeSZjYs8Z4cYMiNaqmtUOF3LcrjHRRLa3E3mM0CqxCEKUkQhCCCEIQCoQhBlC6XCUFVKbsU4KREwcAOv0CYbmpEUX6tOCqQ5Fzc0ZLwQe6DwFfTILabX3pW7YGRuyEsge2udcLS0mnR3kvPWWgjJpIHBuVep/krayWlpYY5KYDnTQ1GhGpLtc9M1bTPGKdkmalQuc/uNBJJyAzJ8ArGG57OTlJKeQDB5uNf8Aatbc9jhY3DCyh0c6pJPIvOvQZcgnNLn46q7i2VjBD7W4HeImmv8A5HN1/hb5r0W6W424mgQwRimJwDGtA3MA93oFX/gYLMztrW/C05iMfvJOVTo1YHbDbiW0/s2ARwt92NuQ6nieaz76z008crD2m3vY53sbA3vRDCZdMbdaEcAakHXMrE9nmDxzUNziVb3LZnStcwAksBkFATRooHg8BofA8VPPXnKxt1FcFAtLKFWNobQkKDOEde2dRi5dRhckJxiSTnZ1XcsHdSxlTmR1CIauuyEuka0GmIgV3DmeQ1Xue1UAeCG5tjAYANRhAGY3LxyOMRzs3Ucwu8SCfQr1TbVrmPc4O97veDtCDzHgVrxMdP8Aj+OtY5rySWb9wqRpy3+HkVW2ljjUtINDTOgIPCo+fknbe46uzB3jXr/IoDgACe+DkHV14AnUHkfJaa6LtuoHbSjcQemLyOviFHoXAiufL58VaTvAGQy5508D/JQ5rSwnnzr8dfiliOoqZnmlDoo1Sp9se05itTxp8RqokAJOizs8ufrdX11xl0LhTe35qDOaGi1902ANsmM/nJI6DJZC8XDEaJ9TIfUyaYc9IXJjEndyyZK5wzXJXcup6rhFAQhCRBCEIMqEIQAuhkkBRVMzjXnjROMl+z9EwE4xPyepjDlrT4/yT9nA+p1PifkokZAzIry3K0uyAyOHoBqegWkxU8p13xFxowGn+p3IAaBbazW6KwRh7wHTU7rMqN5u58h6qnFtjsre7QyUpXWnJp+JWPvW8HSOJcapd9fi71iVtFtBLaZC+RxJPkOQVLSq6Yyqv7iuHtavkOCJnvO3n+63i4+mpWWM/PVMXBcD7Q7LusHvPIyb9TyXp2z89mszTHEAG6EuzfLuc554agDTXxzlpvVjI8EYwtaKADdXUniTxVXBbu+HH9Yr4ZNb569AtueJG85nNP8AtBuQQzCSMfspmh7PmOo+axz2r2K32X8Xd0gpV0P7Vp35mjmjlSnkvIpm0JCnqMPk5y4r36pWpJNUNUMT8ZV7ckIe8A6DM9AKlUUTVtdhrvbILQXkhohLat1BecIpXxVc+1SaxtuteKQv4uJ6cAvQdk9omWmJtjtLgCMoZHflJ/5bz+gnyPJY3aG4ZIHd4Va6pY8e68cuB4g5j1VRFIWlO+Pa5bzXod4WQRPfHJ3SCfDmAfUdNypHMoCCABXUE4eXh5/NX91W4XhZ8DyPxMLcidZYxv8A42+o6FUs9kLSQDpurTy4dFpL/Dp56l8q60WskYR66H6fBQnNByPdPApJpsLiPX6jguLQ5xFaVb506bwi2+2fV8mJGnRSbrs5e9rW6uIA8TRQHvWr9m9nDrWHO0ja558Bl6lTuonmtNtXI2GJsQ/K0Bea2uWpWh2wvPtJXZ5VKyU0inu/g+XrzjppzUkuoFFgC7nkUMUdxzXKVIkoIQhBBCEIBUIQgwhCEzdBdsKaCdi1TgSIIy4gBaizAWdmZq8jPkOHXiod1QBjcZ1Pu8uaj22apVXwueDVttZcc1GhhLinYoS40C012XMRSozKgSXpCui6MRq7JozJ+Q4k7vorK87fVzYY6BrdBuB4uO/j4BcXneLWNLYzpvHHe4cTuCo4HEVfv0HitOefDTMTrUcuROR3mmp8Pj0U27rvBLSdG1cR5gfPyCr22dz3jgKAD41+J6r0PYTZZ9qkL3CkQIDid7W/kHMnIrW2SK+0k2ri6miC7Z7Q/R0ZjaDvcctONSfJeKWw1JXrvtgvRjWss0ZAZGPdGlV45K+qyt8MO+t8oUgzSMCdLUrGrNidiavXvZfdHa2C1FtC8ltBxpU0XksbVvvZbtV+DtGF/wC6koHcjucqnpfP/Fjai2hs8zQ6NxBo78pOhB/LvFRoQsJtPsw6A42HHETk6mbc/dkG489D6L2X2g3CDS1Q5sd71Mx3t/Q6+a87NucHCvNpBzB3UcN4NKHoFpMsdNk752MLdtufBI17HFrmkEEbitrO5lsaZ4wA8AdqwfkdpiaN7D6HLhWnvS5GyVfZxnqY9T/2zv8A4deFdFT3bbpLPIHsNHDyI0IcDqDoQVPplN4ovSIh9DqoT5CNDTitlaLGy3N7SzikoFXwVzPExV94ctRz1WTttkc0kEUPA5dQnRdQi7NabZO2dmJTvLKLLuCk2O00q05Bw/oplylLhbfPicSoJTswNdE3RRWdOMdkm3FBKRIQJEIQAhCEAIQhACKpUIAQhCFBSLGyrgPuiEJhczWwD4AclEdOChCdF6XNxTxNcHOKtb92ijwlsVAXChPAb0IRKc+SyMobSHHX74q5uWzCaRrGEZUpXTEd55DXqhCf3sgndemWfZax2QCS12pgyyYzvO8V1eHtbstnZ2NkgNGigJIA603pUKr62l11b7eS31fMlpldI85uNeSqpJAEIUWotcdsECcIQpI8y1N4p+K2NB1SITlG49Y2H9osLIDZ7T3mUIz4Hcq29p7uMjuynpjHuvGXUOG/IJUJ/a6vnuz0zz4XM7wzbXJzcx4EeCiXnYmzd7ISa8BJ9HfFCFpzftNrXdnlSWV743gtJBB1C2LNqopm4bfA2bd2g/Zzimh7Rvvf4gUIR+IUV8Xfd7qus1pcD+iZlD0xsyPkFlrREWmnwzB6FCFmmdaaLua5qhCVK0VSoQkCIQhACEIQH//Z',
    nom:a,
    cout:cout,
    explication:c,

    keysword:t,
    tagt:["Tonnerre","Eclaire","Super","Terminator"],
    },
  ]
  const table=tables[0];
  return (
        <>
        {tables.map((a)=>(
          <>
          <Cartes lien={a.lien} nom={a.nom} cout={a.cout} explication={a.explication} keysword={a.keysword}></Cartes>
          <Config 
          nom={table.nom} 
          cout={table.cout} 
          explication={table.explication} 
          change={change}
          changeNom={changeNom}
          changeExp={changeExp}></Config>
          </>
        ))}
        <TagC keysword={table.tagt} fun={changeTags}></TagC>
        </>

  )
}

export default App