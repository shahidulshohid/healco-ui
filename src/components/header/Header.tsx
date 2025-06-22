import Image from "next/image"
import Container from "../../components/container/Container"
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <div>
      <Container>
        <nav className="flex justify-between items-center pt-6">
          <div className="flex items-center gap-2">
            <Image
              src="/headerLogo.jpg"
              alt="Header Logo"
              width={36}
              height={36}
            />
            <h2 className="text-2xl font-semibold text-[#1B1B1B]">HealCo</h2>
          </div>
          <div>
            <Button variant="outline">
              <Image src="/unitedStates.jpg" width={20} height={20} alt="United State image" />
              <div>
                <select className="border-none outline-none bg-transparent">
                  <option value="en">ENG</option>
                  <option value="bn">BAN</option>
                </select>
              </div>
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header