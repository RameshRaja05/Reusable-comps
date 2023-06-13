import Button from '../components/Button';
import { RiAncientGateFill } from 'react-icons/ri';
import { GoDeviceDesktop, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="my-3">
                    <Button primary outline>
                        <RiAncientGateFill />
                        Hello there!
                    </Button>
                </div>
                <div className="my-3">
                    <Button secondary>
                        Hi there!
                        <GoDeviceDesktop />
                    </Button>
                </div>
                <div className="my-3">
                    <Button danger>
                        click here
                        <GoDatabase />
                    </Button>
                </div>
                <div className="my-3">
                    <Button success>Click</Button>
                </div>
                <div className="my-3">
                    <Button warning rounded outline>
                        Click
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ButtonPage;